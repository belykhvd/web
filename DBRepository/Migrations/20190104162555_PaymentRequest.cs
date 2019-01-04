using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DBRepository.Migrations
{
    public partial class PaymentRequest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PaymentRequests",
                columns: table => new
                {
                    PaymentRequestId = table.Column<Guid>(nullable: false),
                    Inn = table.Column<string>(nullable: true),
                    Bic = table.Column<string>(nullable: true),
                    AccountNumber = table.Column<string>(nullable: true),
                    Vat = table.Column<string>(nullable: true),
                    Sum = table.Column<decimal>(nullable: false),
                    Phone = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentRequests", x => x.PaymentRequestId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PaymentRequests");
        }
    }
}
