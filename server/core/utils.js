export const log = (message, clearScreen = false) =>
{
    if (clearScreen)
    {
        console.clear()
    }

	console.log(message)
}