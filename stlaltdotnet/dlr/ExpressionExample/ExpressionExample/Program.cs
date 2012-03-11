using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;

namespace ExpressionExample {
    class Program {
        static void Main(string[] args) {

            Express();
            Console.ReadLine();
        }

        private static void Execute() {

            char[] sample = Guid.NewGuid().ToString().ToCharArray();
            int i = 0;
            while (i < sample.Length) {
                Console.WriteLine("|{0}| => {1}", i, sample[i]);
                i++;
            }
        }

        private static void Express() {

            //String sample;
            ParameterExpression sample = Expression.Parameter(typeof (Char[]), "sample");

            //sample = Guid.NewGuid().ToString();
            MethodInfo newGuidMethod = typeof (Guid).GetMethod("NewGuid");
            MethodInfo toStringMethod = typeof (Guid).GetMethod("ToString", new Type[0]);
            MethodInfo toCharArrayMethod = typeof (String).GetMethod("ToCharArray", new Type[0]);
            MethodCallExpression newGuidCall = Expression.Call(null, newGuidMethod);
            MethodCallExpression toStringCall = Expression.Call(newGuidCall, toStringMethod);
            MethodCallExpression toCharArrayCall = Expression.Call(toStringCall, toCharArrayMethod);
            Expression.Assign(sample, toCharArrayCall);

            //sample.Length
            PropertyInfo lengthProperty = typeof (Char[]).GetProperty("Length");
            MemberExpression lengthPropertyAccess = Expression.Property(sample, lengthProperty);

            //Console.WriteLine("|{0}| => {1}", i, sample[i]);
            MethodInfo writeLineMethod = typeof (Console)
                .GetMethod("WriteLine", new[] {typeof (String), typeof (Object), typeof (Object)});

            LabelTarget whileLabel = Expression.Label("whileLoop");

            //i;
            ParameterExpression i = Expression.Parameter(typeof (Int32), "i");

            BlockExpression block = Expression.Block(
                new [] {i},
                Expression.Assign(i, Expression.Constant(0)),
                Expression.Loop(
                    Expression.IfThenElse(
                        Expression.LessThan(i, lengthPropertyAccess),
                        Expression.Block(
                            Expression.Call(null, writeLineMethod, Expression.Constant("|{0}| => {1}"), i, Expression.ArrayIndex(sample, i)),
                            Expression.PostIncrementAssign(i)),
                        Expression.Break(whileLabel)),
                    whileLabel));

            Action lambda = Expression.Lambda<Action>(block).Compile();
            lambda();
        }
    }
}
