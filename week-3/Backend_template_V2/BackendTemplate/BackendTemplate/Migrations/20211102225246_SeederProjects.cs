using Microsoft.EntityFrameworkCore.Migrations;

namespace BackendTemplate.Migrations
{
    public partial class SeederProjects : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 1,
                columns: new[] { "Description", "Price", "Title" },
                values: new object[] { "Neque aut sunt quam architecto est magni aperiam suscipit consectetur. Nobis placeat aut velit recusandae aut vel doloribus. Deserunt dolorum velit illo sed. Fugit sit eius qui. Repudiandae fugiat enim error vel numquam dolore id. Velit voluptas ratione qui expedita tempore quaerat dicta omnis.", 2083907603, "Illo provident aut tempora." });

            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "ID", "ClientID", "Description", "Estimated_Finish_Time", "Price", "Title" },
                values: new object[,]
                {
                    { 28, null, "Corporis ut dolore fugiat sunt molestias. Omnis maiores dolores est. Tenetur qui pariatur totam quia ut eum.", null, 323224126, "Voluptatibus molestias perspiciatis in unde et quos." },
                    { 27, null, "Est rerum enim placeat rerum. Impedit ut quia est dicta est consequatur porro quam. Est aut quam quos eum illum porro eligendi.", null, 1937487694, "Veritatis autem commodi dolor et voluptatem molestias ullam." },
                    { 26, null, "Ab quis nostrum sit aut consectetur incidunt adipisci aperiam. Debitis est illo maiores magni quam tempore. Est perferendis assumenda sit pariatur distinctio sed. Culpa aspernatur voluptas unde unde delectus.", null, 589768412, "Sit repellendus iure quod cum ducimus blanditiis." },
                    { 25, null, "Minus tempore eum enim dolore dolores. Tempora modi labore quis debitis voluptatibus omnis ut rerum voluptates. Cumque error et quia maiores. Soluta ipsa dolores odio similique similique possimus. Voluptates consequatur minus earum nobis porro ducimus soluta fugiat enim.", null, 391084296, "Porro voluptatem sit laboriosam minima corporis eum sit quo eos." },
                    { 24, null, "Fuga dolore eum est quia. Et molestiae et est eius quia dignissimos corrupti. Temporibus aut molestiae dolore perferendis. Quidem beatae natus saepe odio doloribus enim itaque corrupti ut. Ullam et voluptas rem sequi sint ullam aut ut.", null, 469908886, "Qui et rerum repellat voluptatibus veritatis autem." },
                    { 23, null, "Et voluptatem impedit dolores corporis aperiam enim. Ratione dolorum officia non sunt facere eligendi sunt. Provident ex ratione et similique et.", null, 1180847266, "Natus nesciunt sit ut qui modi quibusdam dolore." },
                    { 22, null, "Facere aut eius dolor aut voluptate voluptatibus in id repellat. Qui aut possimus labore. Aspernatur consequuntur repellendus voluptatem laboriosam ad. Qui impedit ut maiores aut praesentium aperiam commodi ea.", null, 2109881646, "Vero commodi eos illo voluptas mollitia aut dolorum quia." },
                    { 21, null, "Inventore porro at ut et sed. Rerum quis optio et est quo quas sequi laborum iste. Qui nihil corporis omnis vel iste voluptatibus dignissimos. Ea autem similique pariatur in. Reiciendis ab voluptatum ad sunt corrupti consequuntur distinctio aliquid. Ut et dolor facere magni.", null, 1185451298, "Possimus quia vel quaerat ipsum incidunt ex nam deleniti." },
                    { 20, null, "Non debitis voluptatum dolorem. Sed totam sequi voluptatem. Incidunt ducimus consequatur error nisi porro aut. Quia enim maiores amet inventore. In sequi non optio libero et maiores.", null, 382847657, "Corrupti quaerat similique amet voluptate aut esse vel sequi enim." },
                    { 19, null, "Qui eveniet non cumque autem. Ut et ut laudantium aut praesentium accusamus sed similique. Libero eum dolores distinctio magnam similique sit ipsa occaecati. Impedit architecto est ab maiores voluptatibus qui qui sapiente sit. Alias consequatur qui placeat suscipit quos. Est enim quibusdam aut dolorum incidunt aperiam beatae alias.", null, 729204488, "Voluptatem quae eaque deleniti aut aut at sequi aperiam." },
                    { 18, null, "Aut quam rem amet fugit. Nihil culpa eum sunt quia quia doloremque officia pariatur eveniet. Eius mollitia quod enim explicabo tenetur animi sunt doloremque omnis. Consequuntur nemo vitae vel. Dignissimos iusto distinctio harum soluta sed distinctio sequi quis.", null, 2137098458, "Voluptatem sunt ea aut vitae enim omnis et quam et." },
                    { 17, null, "Et modi corporis placeat. Illo cum est exercitationem. Non omnis in dolorum. Omnis numquam doloremque sunt aliquam sit et illum quaerat.", null, 1535919732, "Sequi pariatur laboriosam amet sed laboriosam cumque velit." },
                    { 29, null, "Ad vitae asperiores maiores magnam quia. Voluptate commodi quae repellendus voluptates dignissimos delectus dolorem. Non ut aut delectus enim dolores ea.", null, 747295443, "Voluptatem qui omnis dolore non ipsa recusandae voluptatem." },
                    { 16, null, "Alias accusamus maxime et a. Vero aut quia excepturi dignissimos optio maiores voluptatibus et. Doloremque quasi earum earum sint sint minima.", null, 1465040543, "Deleniti eveniet sit et soluta natus ipsum ut quasi harum." },
                    { 14, null, "Maxime iure aliquam quasi impedit nihil molestiae et. Explicabo rem eaque fugiat omnis. Quia omnis eum commodi vel est at non. Architecto ut asperiores nihil eum quam voluptates id repellat. Eum esse placeat nam dolores minus quo.", null, 830062820, "Reprehenderit et consequuntur cumque laudantium magni omnis natus." },
                    { 13, null, "Repellat mollitia hic earum quam libero est. Nulla ut recusandae est non omnis dignissimos non reiciendis. Natus nobis dolores et similique. Omnis aut dolorum exercitationem. Rerum enim quaerat ipsum quisquam temporibus. Minima sint expedita ipsa suscipit nam similique aut nesciunt quos.", null, 1606284982, "Unde nisi velit dolor qui voluptatem ut est." },
                    { 12, null, "Atque est non dolores voluptatibus ut. Vero qui harum id et exercitationem illum inventore dolores iusto. Deleniti nemo dolor et illum.", null, 104424867, "Nihil a id at." },
                    { 11, null, "Asperiores sed id consequatur. Sit eveniet ut cum aut illo similique eligendi. Facilis laboriosam quia tenetur explicabo illum odio vero neque.", null, 259513261, "Et iusto culpa voluptate consequatur a porro sit enim voluptatem." },
                    { 10, null, "Repudiandae aspernatur et laudantium ea. Quo incidunt ea aliquam et vero iure. Tempora sunt deleniti rerum ab ut et velit. Aut ex hic quo repudiandae accusantium amet veritatis. Repudiandae similique distinctio odit veniam illo magnam.", null, 380767352, "Laboriosam earum rerum ea et quia tempore." },
                    { 9, null, "Sunt magni aut non cupiditate rerum alias omnis. Temporibus consequatur esse omnis. Deleniti sed qui non.", null, 2002717099, "Et eveniet qui ducimus eius perspiciatis qui." },
                    { 8, null, "Aliquam sed quaerat totam eligendi. Iure odit ipsa autem. Officia saepe nesciunt tempora qui eveniet. Omnis aut aut assumenda aliquid. Quod nihil iusto quia et aut. Et quis assumenda et possimus veritatis.", null, 2101402866, "Commodi enim vel tempora voluptatem ipsa et sed consectetur est." },
                    { 7, null, "Similique nostrum qui sunt cum occaecati aut aliquid est. Magni voluptas est doloremque ipsam dolore. Sunt consequatur est dolores. Natus maiores voluptas porro suscipit et quia.", null, 520967837, "Vitae autem ex ut ut placeat magni vel sint porro." },
                    { 6, null, "Atque sit ex magnam. Doloremque dignissimos laudantium ea sed aut. Et et fugiat impedit harum. Sapiente ea voluptatem accusamus et et omnis. Voluptatem fuga aut laboriosam sit iste ut suscipit occaecati recusandae. Temporibus quae quam quas deserunt assumenda.", null, 1392247070, "Eligendi ipsum aspernatur qui sunt et." },
                    { 5, null, "Voluptatem nisi aperiam dolor deleniti non quo. Veritatis distinctio asperiores aut. Voluptate eveniet quidem adipisci autem nemo quibusdam ad magni. Maxime sint mollitia nisi porro enim. Ad saepe doloribus possimus libero quas eum ducimus qui distinctio.", null, 1294482929, "Debitis error expedita fugiat deserunt debitis nihil." },
                    { 4, null, "Molestiae consequuntur excepturi est id. Et repellendus voluptatem et et aut voluptatem ab velit. Sed et aut aut tempora et placeat totam laboriosam saepe. Aut fugiat eius voluptas. Molestiae facilis voluptatem accusamus. Est illo temporibus et magnam sunt dolores.", null, 1580233136, "Non quae et porro qui est consequuntur cumque." },
                    { 3, null, "Dolorem quis et aliquid qui velit facere harum eius. Ut accusamus voluptatem occaecati minus. Assumenda sed qui quia recusandae dolores in qui beatae. Ad ut nam voluptatem temporibus. Animi odio repudiandae in soluta aspernatur aperiam corrupti. Provident minus et ut.", null, 1108338971, "Hic magni provident quasi nihil blanditiis." },
                    { 15, null, "Est doloremque dolorem molestiae magni qui eaque voluptatibus ullam ex. Quod consequatur omnis voluptas sint consectetur non ut et. Ea est recusandae voluptatum quaerat. Dolores nihil dolor vitae veniam culpa modi distinctio assumenda consequatur. Autem maiores aliquam et beatae. Delectus qui corporis quos beatae assumenda.", null, 1440713107, "Fugit consequatur rerum veniam mollitia." },
                    { 2, null, "Amet error repellendus omnis delectus. Qui excepturi pariatur incidunt placeat. Quasi qui et ad illum aut eos tenetur aut autem.", null, 960685830, "Quia assumenda voluptatem sed animi." }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 29);

            migrationBuilder.UpdateData(
                table: "Projects",
                keyColumn: "ID",
                keyValue: 1,
                columns: new[] { "Description", "Price", "Title" },
                values: new object[] { "Natus asperiores dignissimos corrupti quae autem excepturi. Ut alias quae consequuntur eos ut minus ullam velit repudiandae. Consequatur illum ullam eos et. Consequatur voluptates ut necessitatibus enim voluptas sit. Omnis officiis sed suscipit veniam incidunt repellat unde. Aut dolorum in quisquam ut illum iusto eos dolorem.", 0, "Minima ut consequuntur sed." });
        }
    }
}
