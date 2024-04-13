import React, { useState } from 'react';
import '../styles/home.css';

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <div className="searchtxt" style={{textAlign:'center'}}>
      <input
        type="text"
        placeholder="Search files"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

const HomePage = () => {
  const [fileName, setFileName] = useState('No file chosen');
  const [fileTable, setFileTable] = useState([]);
  const [fileCount, setFileCount] = useState(0);
  const [searchText, setSearchText] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('No file chosen');
    }
  };

  const handleUpload = () => {
    if (fileName !== 'No file chosen') {
      setFileTable([...fileTable, { name: fileName, id: Date.now() }]);
      setFileName('No file chosen');
      setFileCount(fileCount + 1); // Increment file count
    }
  };

  const highlightText = (text, query) => {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: 'yellow', color: 'black', fontWeight:'1000'}}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const filteredFiles = fileTable.filter((file) =>
    file.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="write">
        <h1>Send Files</h1>
      </div>
      <div className="center-box">
        <div className="upload-box">
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="fileInput">Choose file</label>
          <div className="fil" id="fileName">{fileName}</div>
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
      <div>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className="file-table">
        <table>
          <thead>
            <tr>
              <th style={{ color: 'black' }}>File Name</th>
              <th style={{ color: 'black' }}>Count</th>
            </tr>
          </thead>
          <tbody>
            {filteredFiles.map((file, index) => (
              <tr key={file.id}>
                <td>{highlightText(file.name, searchText)}</td>
                <td>{index + 1}</td> {/* Display index + 1 as count */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          textAlign: 'center',
          color: 'white',
          fontSize: '20',
        }}
      >
        Total files uploaded: {fileCount}
      </div>
    </>
  );
};

export default HomePage;
