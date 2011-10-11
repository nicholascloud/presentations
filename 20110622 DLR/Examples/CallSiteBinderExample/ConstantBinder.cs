using System.Collections.ObjectModel;
using System.Linq.Expressions;
using System.Runtime.CompilerServices;

namespace CallSiteBinderExample {
    internal class ConstantBinder : CallSiteBinder {
        public ConstantBinder() {}

        public override Expression Bind(object[] args, ReadOnlyCollection<ParameterExpression> parameters, LabelTarget returnLabel) {

            return Expression.Return(returnLabel, Expression.Constant(3));
        }
    }
}