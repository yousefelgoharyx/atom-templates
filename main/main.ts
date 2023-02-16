import Atom from "atom";
async function main() {
    await Atom.bootstrap({
        routesPath: "src/routes",
    });
}

main();
