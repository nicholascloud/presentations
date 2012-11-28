using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AsyncPatterns
{
    class IAR {
        private readonly FileStream _stream = new FileStream("a-new-hope.txt", FileMode.Open);
        private readonly Byte[] _data = new Byte[5000];
        private Int32 _bytesRead = 0;
        private const Int32 READ_LIMIT = 50;

        public void Start() {
            Console.WriteLine("(IAR) IAsyncResult interface");
            Read();
        }

        private void Read() {
            Console.WriteLine("reading on thread {0}", Thread.CurrentThread.ManagedThreadId);
            IAsyncResult result = _stream.BeginRead(_data, _bytesRead, READ_LIMIT, OnRead, null);
        }

        private void OnRead(IAsyncResult ar) {
            Console.WriteLine("callback on thread {0}", Thread.CurrentThread.ManagedThreadId);
            Int32 chunkSize;
                chunkSize = _stream.EndRead(ar);
            _bytesRead += chunkSize;
            if (chunkSize > 0 && _bytesRead < _data.Length) {
                Read();
            } else {
                String content = System.Text.Encoding.UTF8.GetString(_data.Prune());
                Console.WriteLine(content);
            }
        }
    }

    static class ByteArrayExtensions {
        public static Byte[] Prune(this Byte[] bytes) {
            if (bytes.Length == 0) return bytes;
            var i = bytes.Length - 1;
            while (bytes[i] == 0) {
                i--;
            }
            Byte[] copy = new Byte[i + 1];
            Array.Copy(bytes, copy, i + 1);
            return copy;
        }
    }
}
