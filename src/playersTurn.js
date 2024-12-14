export default function turn(player, computer, x, y) {
    if (player.turn) {
        player.attack(computer, x, y);
        computer.attack(player);
    } else {
        computer.attack(player);
        player.attack(computer, x, y);
    }
    player.turn = !player.turn;
    computer.turn = !computer.turn;
}
