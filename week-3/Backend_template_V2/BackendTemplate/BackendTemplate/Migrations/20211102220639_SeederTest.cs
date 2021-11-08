using Microsoft.EntityFrameworkCore.Migrations;

namespace BackendTemplate.Migrations
{
    public partial class SeederTest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "ID", "ClientID", "Description", "Estimated_Finish_Time", "Price", "Title" },
                values: new object[] { 1, null, "Dit is een test", null, 0, "Test" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 1);
        }
    }
}
