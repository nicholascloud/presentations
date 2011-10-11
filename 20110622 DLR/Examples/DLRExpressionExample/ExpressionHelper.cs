using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace DLRExpressionExample {
    static class ExpressionHelper {

        internal static Expression Print<T>(Expression expression) {
            return Expression.Call(
                null,
                typeof (Console).GetMethod("WriteLine", new[] { typeof (T) }),
                expression);
        }

        internal static Expression Print(string message) {
            return Expression.Call(
                null,
                typeof(Console).GetMethod("WriteLine", new[] { typeof(String) }),
                Expression.Constant(message));
        }
    }
}
