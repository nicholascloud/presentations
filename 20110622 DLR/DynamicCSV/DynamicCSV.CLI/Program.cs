using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace DynamicCSV.CLI {
    class Program {
        static void Main(string[] args) {

            String csvContents = LoadCsvContents();
            Csv csv = new Csv(csvContents);
            
            while(csv.HasMoreRows) {
                dynamic row = csv.GetNextRow();
                Console.WriteLine("Id: {0}, Name: {1}, State: {2}, DOB: {3}", 
                    row.Id, row["Name"], row["State"], row.DateOfBirth);
            }

            csv.Reset();

            while(csv.HasMoreRows) {
                dynamic row = csv.GetNextRow();
                String[] values = row;
                Console.WriteLine(values.PrettyPrint());
            }

            Console.ReadLine();
        }

        private static String LoadCsvContents() {
            string csvPath = "DynamicCSV.CLI.customers.csv";
            using (var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(csvPath)) {
                using (var reader = new StreamReader(stream)) {
                    return reader.ReadToEnd();
                }
            }
        }
    }
}
