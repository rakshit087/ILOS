async function main() {
  const ILOS = await ethers.getContractFactory("ILoveOpenSource");
  const ilos = await ILOS.deploy();
  console.log(`Deployed ILOS at ${ilos.address}`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
