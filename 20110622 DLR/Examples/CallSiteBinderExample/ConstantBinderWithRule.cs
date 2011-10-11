using System;
using System.Collections.ObjectModel;
using System.Linq;
using System.Linq.Expressions;

namespace CallSiteBinderExample {
    internal class ConstantBinderWithRule : ConstantBinder {

        public override Expression Bind(object[] args, ReadOnlyCollection<ParameterExpression> parameters, LabelTarget returnLabel) {
            
            Console.WriteLine("cache miss");

            ParameterExpression firstParameterExpression = parameters.First();

            return Expression.IfThenElse(
                //if
                Expression.GreaterThanOrEqual(
                    firstParameterExpression, 
                    Expression.Constant(5)),
                    //then
                    Expression.Return(
                        returnLabel,
                        Expression.Constant(10)),
                    //else
                    Expression.Return(
                        returnLabel,
                        Expression.Constant(1)));
        }
    }
}