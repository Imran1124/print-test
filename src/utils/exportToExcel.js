import Share from 'react-native-share';
import FileSystem from 'react-native-fs';
import XLSX from 'xlsx';

export const exportDataToExcel = async sample_data_to_export => {
  // Created Sample data

  let wb = XLSX.utils.book_new();
  let ws = XLSX.utils.json_to_sheet(sample_data_to_export);
  XLSX.utils.book_append_sheet(wb, ws, 'Users');
  const wbout = XLSX.write(wb, {type: 'binary', bookType: 'xlsx'});
  const path = FileSystem.DocumentDirectoryPath + '/MyFile.xlsx';
  // Write generated excel to Storage
  await FileSystem.writeFile(path, wbout, 'ascii');
  await Share.open({
    url: 'file://' + path,
    // type: "text/csv" // Makes no difference
  });
  await FileSystem.unlink(path);
};
