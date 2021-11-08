using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

namespace BackendTemplate.Migrations
{
    public partial class EmployeeMigrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(type: "text", nullable: true),
                    LastName = table.Column<string>(type: "text", nullable: true),
                    Email = table.Column<string>(type: "text", nullable: true),
                    Phone = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ClientEmployee",
                columns: table => new
                {
                    ClientsID = table.Column<int>(type: "int", nullable: false),
                    EmployeesID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientEmployee", x => new { x.ClientsID, x.EmployeesID });
                    table.ForeignKey(
                        name: "FK_ClientEmployee_Clients_ClientsID",
                        column: x => x.ClientsID,
                        principalTable: "Clients",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ClientEmployee_Employees_EmployeesID",
                        column: x => x.EmployeesID,
                        principalTable: "Employees",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeSubproject",
                columns: table => new
                {
                    EmployeesID = table.Column<int>(type: "int", nullable: false),
                    SubprojectsID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeSubproject", x => new { x.EmployeesID, x.SubprojectsID });
                    table.ForeignKey(
                        name: "FK_EmployeeSubproject_Employees_EmployeesID",
                        column: x => x.EmployeesID,
                        principalTable: "Employees",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EmployeeSubproject_Subprojects_SubprojectsID",
                        column: x => x.SubprojectsID,
                        principalTable: "Subprojects",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClientEmployee_EmployeesID",
                table: "ClientEmployee",
                column: "EmployeesID");

            migrationBuilder.CreateIndex(
                name: "IX_EmployeeSubproject_SubprojectsID",
                table: "EmployeeSubproject",
                column: "SubprojectsID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClientEmployee");

            migrationBuilder.DropTable(
                name: "EmployeeSubproject");

            migrationBuilder.DropTable(
                name: "Employees");
        }
    }
}
