﻿// <auto-generated />
using System;
using DBRepository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace DBRepository.Migrations
{
    [DbContext(typeof(RepositoryContext))]
    partial class RepositoryContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("Models.Comment", b =>
                {
                    b.Property<Guid>("CommentId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Author");

                    b.Property<string>("Body");

                    b.Property<DateTime>("CreateDate");

                    b.Property<Guid>("PostId");

                    b.HasKey("CommentId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("Models.PaymentAnyBankCard", b =>
                {
                    b.Property<Guid>("PaymentAnyBankCardId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CardCvc");

                    b.Property<string>("CardExpiration");

                    b.Property<string>("CardNumber");

                    b.Property<decimal>("TransactionAmount");

                    b.Property<string>("UserComment");

                    b.Property<string>("UserEmail");

                    b.HasKey("PaymentAnyBankCardId");

                    b.ToTable("PaymentsAnyBankCard");
                });

            modelBuilder.Entity("Models.PaymentRequest", b =>
                {
                    b.Property<Guid>("PaymentRequestId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("AccountNumber");

                    b.Property<string>("Bic");

                    b.Property<string>("Email");

                    b.Property<string>("Inn");

                    b.Property<string>("Phone");

                    b.Property<decimal>("Sum");

                    b.Property<string>("Vat");

                    b.HasKey("PaymentRequestId");

                    b.ToTable("PaymentRequests");
                });

            modelBuilder.Entity("Models.Post", b =>
                {
                    b.Property<Guid>("PostId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Body");

                    b.Property<Guid>("Comments");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Header");

                    b.HasKey("PostId");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("Models.Tag", b =>
                {
                    b.Property<Guid>("TagId")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("PostId");

                    b.Property<string>("TagName");

                    b.HasKey("TagId");

                    b.HasIndex("PostId");

                    b.ToTable("Tags");
                });

            modelBuilder.Entity("Models.User", b =>
                {
                    b.Property<Guid>("UserId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("IsAdmin");

                    b.Property<string>("Login");

                    b.Property<string>("Password");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Models.Tag", b =>
                {
                    b.HasOne("Models.Post")
                        .WithMany("Tags")
                        .HasForeignKey("PostId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
