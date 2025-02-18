export const openDatabase = (
  dbName,
  version,
  upgradeCallback,
  successCallback,
  errorCallback
) => {
  const request = indexedDB.open(dbName, version);

  request.onupgradeneeded = upgradeCallback;
  request.onsuccess = successCallback;
  request.onerror = errorCallback;
};

export const upgradeDatabase = (event) => {
  const db = event.target.result;
  if (!db.objectStoreNames.contains("users")) {
    db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
  }
};

export const addUser = (db, user) => {
  if (!db) {
    console.error("Database is not initialized");
    return;
  }
  const transaction = db.transaction(["users"], "readwrite");
  const store = transaction.objectStore("users");
  const request = store.add(user);

  request.onsuccess = () => {
    console.log("User added:", user);
  };

  request.onerror = (event) => {
    console.error("Add error:", event.target.errorCode);
  };
};
export const getAllUsers = (db, callback) => {
  if (!db) {
    console.error("Database is not initialized");
    return;
  }
  const transaction = db.transaction(["users"], "readonly");
  const store = transaction.objectStore("users");
  const request = store.getAll();

  request.onsuccess = (event) => {
    callback(event.target.result);
  };

  request.onerror = (event) => {
    console.error("Get all users error:", event.target.errorCode);
  };
};
export const getAllLocations = (db, callback) => {
  if (!db) {
    console.error("Database is not initialized");
    return;
  }
  const transaction = db.transaction(["users"], "readonly");
  const store = transaction.objectStore("users");
  const request = store.getAll();

  request.onsuccess = (event) => {
    const users = event.target.result;
    const locations = users.map((user) => user.location);
    callback(locations);
  };

  request.onerror = (event) => {
    console.error("Get all locations error:", event.target.errorCode);
  };
};
