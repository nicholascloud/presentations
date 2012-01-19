using System;
using System.Dynamic;
using System.Linq.Expressions;

namespace DynamicCSV {
    internal class CsvRow : DynamicObject {
        private readonly String[] _header;
        private readonly String[] _data;

        public CsvRow(String[] header, String[] data) {
            _header = header;
            _data = data;
        }

        public override bool TryGetMember(GetMemberBinder binder, out object result) {
            result = GetValue(binder.Name);
            return result != null;
        }

        public override bool TryGetIndex(GetIndexBinder binder, object[] indexes, out object result) {
            if (indexes.Length != 1) {
                result = null;
                return false;
            }

            string header = indexes[0] as String;

            result = GetValue(header);
            return result != null;
        }

        public String GetValue(String header) {
            if (String.IsNullOrEmpty(header)) {
                return null;
            }

            int index = Array.IndexOf(_header, header);

            if (index == -1) {
                return null;
            }

            return _data[index];
        }

        public override bool TryConvert(ConvertBinder binder, out object result) {
            if(binder.ReturnType != typeof(String[])) {
                result = null;
                return false;
            }

            result = _data;
            return true;
        }
    }
}