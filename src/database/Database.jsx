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
  if (!db.objectStoreNames.contains("bookings")) {
    db.createObjectStore("bookings", { keyPath: "id", autoIncrement: true });
  }
  if (!db.objectStoreNames.contains("members")) {
    db.createObjectStore("members", { keyPath: "id", autoIncrement: true });
  }
};

export const addBook = (db, booking) => {
  if (!db) {
    console.error("Database is not initialized");
    return;
  }
  const transaction = db.transaction(["bookings"], "readwrite");
  const store = transaction.objectStore("bookings");
  const request = store.add(booking);

  request.onsuccess = () => {
    console.log("Booking added:", booking);
  };

  request.onerror = (event) => {
    console.error("Add error:", event.target.errorCode);
  };
};
export const addMember = (db, member) => {
  if (!db) {
    console.error("Database is not initialized");
    return;
  }

  const transaction = db.transaction(["members"], "readwrite");
  const store = transaction.objectStore("members");

  const getRequest = store.get(member.email);

  getRequest.onsuccess = () => {
    if (getRequest.result) {
      console.error("Member already exists with email:", member.email);
      return;
    }

    const addRequest = store.add({ ...member, cars: [] });

    addRequest.onsuccess = () => {
      console.log("Member added successfully!");
    };

    addRequest.onerror = () => {
      console.error("Error adding member:", addRequest.error);
    };
  };

  getRequest.onerror = () => {
    console.error("Error checking existing member:", getRequest.error);
  };
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
export const addCar = (db, memberId, newCar) => {
  if (!db) {
    console.error("Database is not initialized");
    return;
  }
  try {
    const transaction = db.transaction(["members"], "readwrite");
    const store = transaction.objectStore("members");

    const getMemberRequest = store.get(memberId);

    getMemberRequest.onsuccess = () => {
      const member = getMemberRequest.result;

      if (member) {
        if (!member.cars) {
          member.cars = [];
        }

        member.cars.push(newCar);

        const updateRequest = store.put(member);

        updateRequest.onsuccess = () => {
          console.log("Car added successfully to member!");
        };

        updateRequest.onerror = () => {
          console.log("Error updating member");
        };
      } else {
        console.log("Member not found");
      }
    };

    getMemberRequest.onerror = () => {
      console.log("Error fetching member");
    };
  } catch (error) {
    console.error("Error adding car to member:", error);
  }
};
export const getBookings = (db, callback) => {
  if (!db) {
    console.error("Database is not initialized");
    return;
  }
  const transaction = db.transaction(["bookings"], "readonly");
  const store = transaction.objectStore("bookings");
  const request = store.getAll();

  request.onsuccess = (event) => {
    callback(event.target.result);
  };
  request.onerror = (event) => {
    console.error("Get all bookings error:", event.target.errorCode);
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
export const getMembers = (db, callback) => {
  if (!db) {
    console.error("Database is not initialized");
    return;
  }
  const transaction = db.transaction(["members"], "readonly");
  const store = transaction.objectStore("members");
  const request = store.getAll();

  request.onsuccess = (event) => {
    callback(event.target.result);
  };

  request.onerror = (event) => {
    console.error("Get all members error:", event.target.errorCode);
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
    const locations = users.map((user) => user.location).filter((loc) => loc);
    callback(locations);
  };

  request.onerror = (event) => {
    console.error("Get all locations error:", event.target.errorCode);
  };
};
export const getAllCars = (db, callback) => {
  if (!db) {
    console.error("Database is not initialized");
    return;
  }
  const transaction = db.transaction(["users"], "readonly");
  const store = transaction.objectStore("users");
  const request = store.getAll();

  request.onsuccess = (event) => {
    const users = event.target.result;
    const cars = users.map((user) => user.cars).filter((car) => car);
    callback(cars);
  };

  request.onerror = (event) => {
    console.error("Get all locations error:", event.target.errorCode);
  };
};
export const UpdateBook = (db, id, status) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("bookings", "readwrite");
    const objectStore = transaction.objectStore("bookings");

    const getRequest = objectStore.get(id);

    getRequest.onsuccess = (event) => {
      const booking = event.target.result;
      if (booking) {
        booking.status = status;
        const updateRequest = objectStore.put(booking);

        updateRequest.onsuccess = () => {
          resolve();
        };

        updateRequest.onerror = (event) => {
          reject(event.target.error);
        };
      } else {
        reject(new Error("Booking not found."));
      }
    };

    getRequest.onerror = (event) => {
      reject(event.target.error);
    };
  });
};
