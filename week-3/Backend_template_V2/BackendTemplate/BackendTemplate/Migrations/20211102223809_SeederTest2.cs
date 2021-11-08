using Microsoft.EntityFrameworkCore.Migrations;

namespace BackendTemplate.Migrations
{
    public partial class SeederTest2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 1,
                columns: new[] { "Description", "Title" },
                values: new object[] { "Error vel quos amet maxime ea. Est enim ipsa ratione ipsa. Commodi facere velit explicabo. Quas reiciendis ut ea et. Libero magni dicta inventore dolor illo voluptas. Ullam quia molestias a voluptas quis enim quibusdam neque.", "Faker.Extensions.EnumerableExtensions+<Times>d__0`1[System.String]" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 1,
                columns: new[] { "Description", "Title" },
                values: new object[] { "Dit is een test", "Test" });
        }
    }
}
