using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Post
    {
        public string Body { get; set; }
        public Guid Comments { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Header { get; set; }
        public Guid PostId { get; set; }
        public IEnumerable<Tag> Tags { get; set; }
    }
}