{
  // Enum
  
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY =1;
  const WEDNESDAY = 2;
  // Enum과 최대한 비슷하게 가능
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1,})

  // TYPESCRIPT
  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wednesday, // 2
  }
  console.log(Days.Monday);
  const day = Days.Tuesday;
}