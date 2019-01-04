using System;

namespace Models
{
    public class Comment
    {
        public string Author { get; set; }
        public string Body { get; set; }
        public Guid CommentId { get; set; }
        public DateTime CreateDate { get; set; }
        public Guid PostId { get; set; }
    }
}