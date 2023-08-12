using System.ComponentModel.DataAnnotations;

namespace argus_backend
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; }= string.Empty;

        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyyyyyy}", ApplyFormatInEditMode = true)]
        [DataType(DataType.Date)]
        public DateTime BirthDate { get; set; }
    }
}
