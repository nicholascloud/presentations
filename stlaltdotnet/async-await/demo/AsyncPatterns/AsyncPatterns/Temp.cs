using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AsyncPatterns
{
    internal class Temp {

    public async Task<String[]> GetPrimaryServers() {
        //this takes longer
        return new[] { "foo1.com", "bar1.com" };
    }

    public async Task<String[]> GetSecondaryServers() {
        return new[] { "foo2.com", "bar2.com" };
    }

    public async Task<List<String>> GetFastestServers() {
        var primaryTask = GetPrimaryServers();
        var secondaryTask = GetSecondaryServers();
        Task<Task<String[]>> metaTask = Task.WhenAny(primaryTask, secondaryTask);
        Task<String[]> fastestTask = await metaTask;
        String[] servers = await fastestTask; //always synchronous
        return new List<String>(servers);
    }

    public async Task<List<String>> GetAllServers() {
        Task<String[][]> metaTask = Task.WhenAll(GetPrimaryServers(), GetSecondaryServers());
        String[][] servers = await metaTask;
        List<String> allServers = new List<String>();
        Array.ForEach(servers, allServers.AddRange);
        return allServers;
    }

    public async Task<String[]> EnforceTimout(Task<String[]> task, Int32 timeout) {
        Task timeoutTask = Task.Delay(timeout * 1000);
        Task finishedFirst = Task.WhenAny(task, timeoutTask);
        if (finishedFirst == timeoutTask) {
            throw new Exception("timeout");
        }
        return await task;
    }

    public async Task<List<String>> GetFastestServers(Int32 timeout) {
        var primaryTask = GetPrimaryServers();
        var secondaryTask = GetSecondaryServers();

        Task<String[]> metaTask = await Task.WhenAny(
            EnforceTimout(primaryTask, 1000),
            EnforceTimout(secondaryTask, 1000)
            );

        return new List<String>(await metaTask);
    }


    




    
    
    
    }
}
