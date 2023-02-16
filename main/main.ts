import Atom from "atom";
async function main() {
    await Atom.bootstrap({
        routesPath: "/routes",
    });
}

main();
