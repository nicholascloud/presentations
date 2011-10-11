using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;

namespace DLRExpressionExample {
    class Program {

        private static void SimpleExpressionExample() {
            MethodInfo method = typeof (Console).GetMethod("WriteLine", new[] { typeof (String) });

            Expression callExpression = Expression.Call(null, method, Expression.Constant("Hello World"));

            Action callDelegate = Expression.Lambda<Action>(callExpression).Compile();
            callDelegate();
        }

        private static void StatementExample() {
            
            /*
            {
                String x = "Hello";
                String y = if (true) //This causes compilation error.
                    x.ToLower();
            }
            */

            MethodInfo method = typeof (String).GetMethod("ToLower", new Type[0]);
            ParameterExpression x = Expression.Variable(typeof (String), "x");
            ParameterExpression y = Expression.Variable(typeof (String), "y");
            Expression blockExpression = Expression.Block(
                new ParameterExpression[] { x, y },
                Expression.Assign(x, Expression.Constant("Hello")),
                Expression.Assign(y, Expression.Condition(
                    Expression.Constant(true),
                    Expression.Call(x, method),
                    Expression.Default(typeof (String)),
                    typeof (String))
                    )
                );

            Func<String> blockDelegate = Expression.Lambda<Func<String>>(blockExpression)
                .Compile();
            string result = blockDelegate();
            Console.WriteLine(result);
        }

        private static void BinaryExpressionExample() {

            Expression binaryExpression = Expression.Divide(
                Expression.Add(
                    Expression.Constant(10d),
                    Expression.Constant(20d)),
                Expression.Constant(3d));

            Func<Double> binaryDelegate = Expression.Lambda<Func<Double>>(binaryExpression)
                .Compile();

            Console.WriteLine(binaryExpression.ToString());
            Console.WriteLine(binaryDelegate());
        }

        private static void ConditionalExpressionExample() {

            Func<String, Expression> writeLine = s => {
                return Expression.Call(
                    null,
                    typeof (Console).GetMethod("WriteLine", new[] { typeof (String) }),
                    Expression.Constant(s));
            };

            Expression condition = Expression.IfThenElse(
                Expression.Constant(true),
                writeLine("true"),
                writeLine("false")
                );

            Action conditionDelegate = Expression.Lambda<Action>(condition)
                .Compile();
            conditionDelegate();
        }

        private static void SwitchExpressionExample() {

            string switchValue = "Baz";

            Expression switchExpression = Expression.Switch(
                Expression.Constant(switchValue),
                Expression.Constant(4), //default
                new[] {
                    Expression.SwitchCase(
                        Expression.Constant(1),
                        Expression.Constant("Foo")
                        ),
                    Expression.SwitchCase(
                        Expression.Constant(2),
                        Expression.Constant("Bar")
                        ),
                    Expression.SwitchCase(
                        Expression.Constant(3),
                        Expression.Constant("Baz")
                        ),
                });

            Func<Int32> switchDelegate = Expression.Lambda<Func<Int32>>(switchExpression)
                .Compile();

            Console.WriteLine(String.Format("{0} => {1}", switchValue, switchDelegate()));
            Console.WriteLine();
        }

        private static void ScopeExpressionExample() {

            ParameterExpression x = Expression.Variable(typeof (Int32), "x");
            ParameterExpression y = Expression.Variable(typeof (Int32), "y");

            Expression addExpression = Expression.Block(
                new[] { x },
                Expression.Assign(x, Expression.Constant(10)),
                Expression.Block(
                    new[] { x, y },
                    Expression.Assign(x, Expression.Constant(5)),
                    ExpressionHelper.Print<Int32>(x) //5
                    ),
                ExpressionHelper.Print<Int32>(x) //10
                );

            Action addDelegate = Expression.Lambda<Action>(addExpression)
                .Compile();
            
            addDelegate();
        }

        private static void LambdaExpressionWithBoundVariablesExample() {

            ParameterExpression first = Expression.Parameter(typeof (String), "first");
            ParameterExpression last = Expression.Parameter(typeof (String), "last");

            Expression<Func<String, String, String>> combine = 
                Expression.Lambda<Func<String, String, String>>(
                    Expression.Call(
                        null, 
                        typeof(String).GetMethod("Concat", new [] {typeof(String), typeof(String), typeof(String)}), 
                        first, 
                        Expression.Constant(" "), 
                        last
                    ),
                    first,
                    last
                );

            String name = combine.Compile()("Buck", "Rogers");
            Console.WriteLine("Combined: " + name);
        }

        private static void LambdaExpressionWithFreeVariablesExample() {

            ParameterExpression x = Expression.Variable(typeof (Int32), "x");
            ParameterExpression y = Expression.Variable(typeof (Int32), "y");
            ParameterExpression addFunc = Expression.Variable(typeof (Func<Int32>), "add");

            Expression addExpression = Expression.Block(
                new[] { x, y, addFunc },
                Expression.Assign(x, Expression.Constant(10)),
                Expression.Assign(y, Expression.Constant(4)),
                Expression.Assign(addFunc, Expression.Lambda<Func<Int32>>(
                    Expression.Add(x, y))
                ),
                Expression.Block(
                    new[]{y},
                    Expression.Assign(y, Expression.Constant(5)), //addFunc still holds reference to y=4
                    Expression.Invoke(addFunc)
                )
            );

            int result = Expression.Lambda<Func<Int32>>(addExpression)
                .Compile()(); //14
            Console.WriteLine(result);
        }

        private static void GotoExpressionExample() {

            LabelTarget inner = Expression.Label();
            LabelTarget outer = Expression.Label();

            Expression<Action> lambda = Expression.Lambda<Action>(
                Expression.Block(
                    Expression.Goto(inner),
                    ExpressionHelper.Print("Unreachable"),
                    Expression.Block(
                        Expression.Label(inner),
                        ExpressionHelper.Print("In inner block"),
                        Expression.Goto(outer),
                        ExpressionHelper.Print("Unreachable")),
                    Expression.Label(outer),
                    ExpressionHelper.Print("In outer block")));

            lambda.Compile()();
        }

        private static void GotoExpressionWhileLoopExample() {

            LabelTarget whileLabel = Expression.Label();
            ParameterExpression i = Expression.Variable(typeof (Int32), "i");

            Expression<Func<Int32>> lambda = Expression.Lambda<Func<Int32>>(
                Expression.Block(
                    new[] { i },
                    Expression.Label(whileLabel), //goto+label simulate while loop
                    Expression.IfThen(Expression.LessThan(i, Expression.Constant(3)),
                        Expression.Block(
                            Expression.PostIncrementAssign(i),
                            Expression.Goto(whileLabel))
                        ),
                    i) //return; should be 3
                );

            int result = lambda.Compile()();
            Console.WriteLine(result);
        }

        private static void IndexExpressionExample() {

            var nums = new [] { 3, 7, 5, 1, 9 };

            IndexExpression arrayAccessExpression = Expression.ArrayAccess(
                Expression.Constant(nums),
                Expression.Constant(3));

            Expression arrayIndexAssignment = Expression.Assign(
                arrayAccessExpression,
                Expression.Constant(8));

            Console.WriteLine(nums.PrettyPrint());

            Action indexAssignmentDelegate = Expression.Lambda<Action>(arrayIndexAssignment)
                .Compile();
            indexAssignmentDelegate();

            Console.WriteLine(nums.PrettyPrint());
        }

        private static void CustomExpressionExample() {

            ParameterExpression arg1 = Expression.Parameter(typeof (String), "arg1");

            Expression<Action<String>> print = Expression.Lambda<Action<String>>(
                new ConsoleExpression(arg1),
                arg1);

            print.Compile()("Hello World!");
        }

        static void Main(string[] args) {
            //            SimpleExpressionExample();
            //            StatementExample();
            //            BinaryExpressionExample();
            //            ConditionalExpressionExample();
            //            SwitchExpressionExample();
            //            ScopeExpressionExample();
            //            LambdaExpressionWithBoundVariablesExample();
            //            LambdaExpressionWithFreeVariablesExample();
            //            GotoExpressionExample();
            //            GotoExpressionWhileLoopExample();
//            IndexExpressionExample();
            CustomExpressionExample();
            Console.ReadLine();
        }
    }
}
