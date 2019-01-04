using System;

namespace Models
{
    public class Tag
    {
        public Guid PostId { get; set; }
        public Guid TagId { get; set; }
        public string TagName { get; set; }
    }
}