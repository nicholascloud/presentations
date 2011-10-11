using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace DynamicCSV {
    public class Csv {
        private readonly String[] _header;
        private readonly IList<String[]> _contents = new List<String[]>();
        private int _currentIndex = -1;

        public Csv(String contents) {
            using(var reader = new StringReader(contents)) {
                for(int i = 0;;i++) {
                    string line = reader.ReadLine();
                    if(line == null) {
                        break;
                    }
                    
                    string[] parts = line.Split(',');
                    
                    //always assume header
                    if(i == 0) {
                        _header = parts.ReplaceAll(" ", String.Empty);
                        continue;
                    }

                    _contents.Add(parts);
                }
            }
        }

        public bool HasMoreRows {
            get {
                return _contents.Count > 0 &&
                    _currentIndex < _contents.Count - 1;
            }
        }

        public dynamic GetNextRow() {
            return new CsvRow(_header, _contents[++_currentIndex]);
        }

        public void Reset() {
            _currentIndex = -1;
        }
    }
}
