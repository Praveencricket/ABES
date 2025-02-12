const fs = require("fs/promises");

const read = async () => {
    try {
        const data = await fs.readFile("./data.txt", "utf-8");
        console.log("Read File Data:", data);
    } catch (error) {
        console.error("Error reading file:", error);
    }
};

const write = async () => {
    try {
        const newData = "This is my new work";
        await fs.writeFile("./data1.txt", newData, "utf-8");
        console.log("File written successfully to data1.txt");
    } catch (error) {
        console.error("Error writing file:", error);
    }
};


const main = async () => {
    await write(); 
    await read();  
    console.log("first");
    console.log("2nd");
    console.log("3rd");
    console.log("4th");
};

main();