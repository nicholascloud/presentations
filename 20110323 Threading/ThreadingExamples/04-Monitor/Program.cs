using System;
using System.Threading;

namespace MonitorExample {
    
    class Program {

        static void Main(string[] args) {

            bool useThreadSafe = true;

            WaitHandle waitHandle = new ManualResetEvent(true);
            
            NameSplitter nameSplitter = useThreadSafe
                ? new ThreadSafeNameSplitter()
                : new NameSplitter();

            NameSplitWorker[] workers = new NameSplitWorker[25];
            for(int i = 0; i < workers.Length; i++) {
                workers[i] = new NameSplitWorker("Worker" + i, waitHandle, _names, nameSplitter);
            }

            Console.WriteLine("Press 'q' to quit");

            Thread.Sleep(2000);

            try {
                Array.ForEach(workers, w => w.Start());

                while(Console.ReadKey(true).Key != ConsoleKey.Q) {
                    //spin!
                }

                Array.ForEach(workers, w => w.Stop());

            } catch(Exception ex) {

                Console.WriteLine(ex.Message);
            }
        }

        private static readonly String[] _names = new[] {
            "Jerri Rosch",
            "Jeanie Liebig",
            "Tameka Mcelravy",
            "Jamie Esh",
            "Neil Crotts",
            "Julio Alsop",
            "Erik Quijada",
            "Ted Grippo",
            "Gay Zakrzewski",
            "Margery Hooley",
            "Cody Pohlmann",
            "Clayton Schwartzman",
            "Dona Sabado",
            "Nelson Vath",
            "Ted Holeman",
            "Darryl Kleiner",
            "Guy Billie",
            "Clayton Mansur",
            "Guy Uselton",
            "Gath Martin",
            "Avis Mcsween",
            "Marylou Lundin",
            "Pearlie Fudala",
            "Julio Ulland",
            "Melisa Grothe",
            "Hugh Kropf",
            "Jessie Feist",
            "Noemi Bun",
            "Annabelle Sanger",
            "Mathew Henkle",
            "Darren Fluharty",
            "Loraine Lyden",
            "Julio Malsam",
            "Jami Silliman",
            "Ashlee Luciani",
            "Odessa Thor",
            "Noreen Gory",
            "Zelma Diblasi",
            "Lance Fadden",
            "Allyson Porta",
            "Nannie Gatti",
            "Tameka Piermarini",
            "Jamie Headlee",
            "Christian Vigo",
            "Jerri Alexandra",
            "Emilia Niven",
            "Mathew Reveles",
            "Pearlie Aday",
            "Katy Vicente",
            "Kurt Mishoe",
            "Lorrie Hilaire",
            "Saundra Kellerhouse",
            "Lorrie Anchondo",
            "Darryl Arden",
            "Erik Vannostrand",
            "Louisa Stillings",
            "Clinton Lacher",
            "Lakisha Ciccone",
            "Emilia Sartori",
            "Javier Azar"
        };
    }
}
