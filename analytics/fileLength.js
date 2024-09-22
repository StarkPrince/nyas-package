const fs = require('fs');
const path = require('path');

// Function to count the number of lines in a file
function countLinesInFile(filePath)
{
    return new Promise((resolve, reject) =>
    {
        let lineCount = 0;
        const stream = fs.createReadStream(filePath);

        stream.on('data', (buffer) =>
        {
            let idx = -1;
            lineCount--; // Because the last chunk will have an extra line
            do {
                idx = buffer.indexOf(10, idx + 1); // 10 is the buffer code for '\n'
                lineCount++;
            } while (idx !== -1);
        });

        stream.on('end', () => resolve(lineCount));
        stream.on('error', (error) => reject(error));
    });
}

// Recursive function to go through all files in a directory and count lines in each file
async function processDirectory(directory)
{
    let fileLineCounts = {};

    const items = fs.readdirSync(directory, { withFileTypes: true });
    for (const item of items) {
        const fullPath = path.join(directory, item.name);

        if (item.isDirectory()) {
            // Recursively process the directory
            const nestedFileCounts = await processDirectory(fullPath);
            fileLineCounts = { ...fileLineCounts, ...nestedFileCounts };
        } else if (item.isFile()) {
            try {
                const lineCount = await countLinesInFile(fullPath);
                fileLineCounts[fullPath] = lineCount;
            } catch (error) {
                console.error(`Error counting lines in file: ${fullPath}`, error);
            }
        }
    }

    return fileLineCounts;
}
const zeroPad = (num, places) => String(num).padStart(places, '0')

// Main function to execute the process
async function countLinesInSrcFolder(srcPath)
{
    try {
        const fileCounts = await processDirectory(srcPath);
        for (const [file, count] of Object.entries(fileCounts)) {
            console.log(`${zeroPad(count, 3)} lines: ${file}`);
        }
    } catch (error) {
        console.error('Error while processing the folder:', error);
    }
}

// Example usage
const srcFolderPath = path.join(__dirname, 'src'); // Replace with your folder path
countLinesInSrcFolder(srcFolderPath);
