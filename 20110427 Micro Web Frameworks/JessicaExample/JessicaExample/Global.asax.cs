using System;
using System.Web;
using Jessica;

namespace JessicaExample {
    public class Global : HttpApplication {
        private void Application_Start(object sender, EventArgs e) {
            Jess.Initialise();
        }
    }
}