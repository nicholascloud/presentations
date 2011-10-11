using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using MarkdownSharp;
using Nancy.ViewEngines;

namespace Nancy.ViewEngine.Markdown {

    public class MarkdownViewEngine : IViewEngine {

        /// <summary>
        /// Default Markdown transformation options
        /// </summary>
        /// <remarks>
        /// See MarkdownSharp API documentation for comments on each option
        /// </remarks>
        private static readonly MarkdownOptions _defaultOptions = new MarkdownOptions {
            AutoHyperlink = false,
            AutoNewLines = false,
            EmptyElementSuffix = " />",
            EncodeProblemUrlCharacters = false,
            LinkEmails = true,
            StrictBoldItalic = false
        };

        private readonly IMarkdownOptions _options;

        public MarkdownViewEngine()
            : this(_defaultOptions) {
        }

        public MarkdownViewEngine(IMarkdownOptions options) {
            _options = options;
        }

        public IEnumerable<string> Extensions {
            get { return new[] {"md", "markdown"}; }
        }

        public Action<Stream> RenderView(ViewLocationResult viewLocationResult, dynamic model) {

            return stream => {
                var transformer = new MarkdownSharp.Markdown(_options);
                string markdown = viewLocationResult.Contents.ReadToEnd();
                string html = transformer.Transform(markdown);

                var writer = new StreamWriter(stream);
                writer.Write(html);
                writer.Flush();
            };
        }
    }
}
