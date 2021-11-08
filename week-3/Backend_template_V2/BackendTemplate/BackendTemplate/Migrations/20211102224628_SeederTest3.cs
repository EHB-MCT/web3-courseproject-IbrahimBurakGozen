using Microsoft.EntityFrameworkCore.Migrations;

namespace BackendTemplate.Migrations
{
    public partial class SeederTest3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 1,
                columns: new[] { "Description", "Title" },
                values: new object[] { "Natus asperiores dignissimos corrupti quae autem excepturi. Ut alias quae consequuntur eos ut minus ullam velit repudiandae. Consequatur illum ullam eos et. Consequatur voluptates ut necessitatibus enim voluptas sit. Omnis officiis sed suscipit veniam incidunt repellat unde. Aut dolorum in quisquam ut illum iusto eos dolorem.", "Minima ut consequuntur sed." });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 1,
                columns: new[] { "Description", "Title" },
                values: new object[] { "Error vel quos amet maxime ea. Est enim ipsa ratione ipsa. Commodi facere velit explicabo. Quas reiciendis ut ea et. Libero magni dicta inventore dolor illo voluptas. Ullam quia molestias a voluptas quis enim quibusdam neque.", "Faker.Extensions.EnumerableExtensions+<Times>d__0`1[System.String]" });
        }
    }
}
