import { open } from 'node:fs/promises';

const create = async () => {
  const content = 'I am fresh and young';
  const filePath = 'src/fs/files/fresh.txt';

  try {
    const fileHandle = await open(filePath, 'wx');
    await fileHandle.writeFile(content);
    console.log('File created successfully');
    await fileHandle.close();
  } catch (error) {
    if (error.code === 'EEXIST') {
      throw new Error('FS operation failed');
    } else {
      console.log('Unexpected error:', error);
    }
  }
};

await create();

/**
 * [SELF-REVIEW] Common notes:
 * 1. Use constants outside of the main function unless you derive args from that function
 * 2. Consider creating an error-factory file and export it wherever required
 */