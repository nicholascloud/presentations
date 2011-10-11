using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Controls;
using ImpromptuInterface.MVVM;

namespace WpfApplication1 {
    public interface IContract {
         decimal Value1 { get; set; }
         decimal Value2 { get; set; }
         decimal Total { get; set; }
    }

    public class ViewModel : ImpromptuViewModel<IContract> {
        public ViewModel() {
            Contract.Value1 = 0;
            Dynamic.Value2 = 0;
            Dynamic.Total = 0;
        }

        public void Add(object parameter) {
            Contract.Total = Contract.Value1 + Dynamic.Value2;
        }

        public void Multiply(Button sender, object e) {
            Contract.Total = Contract.Value1 * Contract.Value2;
        }
    }
}
