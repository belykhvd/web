using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DBRepository.Migrations
{
    public partial class PaymentAnyBankCard : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PaymentsAnyBankCard",
                columns: table => new
                {
                    PaymentAnyBankCardId = table.Column<Guid>(nullable: false),
                    CardNumber = table.Column<string>(nullable: true),
                    CardExpiration = table.Column<string>(nullable: true),
                    CardCvc = table.Column<string>(nullable: true),
                    TransactionAmount = table.Column<decimal>(nullable: false),
                    UserComment = table.Column<string>(nullable: true),
                    UserEmail = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentsAnyBankCard", x => x.PaymentAnyBankCardId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PaymentsAnyBankCard");
        }
    }
}
