import Atom from "@/mod.ts";
async function main() {
  await Atom.bootstrap({
    routesPath: "example/routes",
  });
}

main();
