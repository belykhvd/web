using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DBRepository.Migrations
{
    public partial class Migration0 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CardPayments",
                columns: table => new
                {
                    CardPaymentId = table.Column<Guid>(nullable: false),
                    CardNumber = table.Column<string>(nullable: true),
                    Expiration = table.Column<string>(nullable: true),
                    Cvc = table.Column<string>(nullable: true),
                    Sum = table.Column<decimal>(nullable: false),
                    Comment = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    IsSafe = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CardPayments", x => x.CardPaymentId);
                });

            migrationBuilder.CreateTable(
                name: "PaymentRequests",
                columns: table => new
                {
                    PaymentRequestId = table.Column<Guid>(nullable: false),
                    Inn = table.Column<string>(nullable: true),
                    Bic = table.Column<string>(nullable: true),
                    AccountNumber = table.Column<string>(nullable: true),
                    Vat = table.Column<int>(nullable: false),
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
                name: "CardPayments");

            migrationBuilder.DropTable(
                name: "PaymentRequests");
        }
    }
}
