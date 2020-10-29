export function findTheDifference(
  originalStr: string,
  editedStr: string
): string {
  const sortedOriginalArr = [...originalStr].sort();
  const sortedEditedArr = [...editedStr].sort();
  return sortedOriginalArr.join("") !== sortedEditedArr.join("")
    ? sortedEditedArr.filter((char) => originalStr.indexOf(char) === -1)[0]
    : "";
}

export function findTheDiff(originalStr: string, editedStr: string): string {
  const sortedOriginalArr = [...originalStr].sort();
  const sortedEditedArr = [...editedStr].sort();

  return sortedOriginalArr.join("") !== sortedEditedArr.join("")
    ? String.fromCharCode(
        [...sortedEditedArr, ...sortedOriginalArr]
          .map((char) => char.charCodeAt(0))
          .reduce((editCharCode, charCode) => editCharCode ^ charCode)
      )
    : "";
}

function _findTheDiff(originalStr: string, editedStr: string): string {
  const sortedOriginalArr = [...originalStr].sort();
  const sortedEditedArr = [...editedStr].sort();

  const editedSum = sortedEditedArr
    .map((char) => char.charCodeAt(0))
    .reduce((sum, charCode) => sum + charCode, 0);
  const originalSum = sortedOriginalArr
    .map((char) => char.charCodeAt(0))
    .reduce((sum, charCode) => sum + charCode, 0);
  const diff = editedSum - originalSum;

  return sortedOriginalArr.join("") !== sortedEditedArr.join("")
    ? String.fromCharCode(diff)
    : "";
}
