using System;
using System.Linq.Expressions;
using System.Reflection;

namespace DLRExpressionExample {
    public class ConsoleExpression : Expression {
        private readonly Expression _outputExpression;

        private static readonly MethodInfo _consoleMethod =
            typeof (Console).GetMethod("WriteLine", new[] { typeof (String) });

        public ConsoleExpression(Expression outputExpression) {
            _outputExpression = outputExpression;
        }

        public ConsoleExpression(String output)
            : this(Expression.Constant(output)) {
        }

        public override bool CanReduce {
            get { return true; }
        }

        public override Expression Reduce() {
            return Expression.Call(null, _consoleMethod, _outputExpression);
        }

        public override ExpressionType NodeType {
            get { return ExpressionType.Extension; }
        }

        public override Type Type {
            get { return _consoleMethod.ReturnType; }
        }

        public override string ToString() {
            return _outputExpression.ToString();
        }
    }
}