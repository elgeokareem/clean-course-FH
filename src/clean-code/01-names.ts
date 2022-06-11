(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
    { id: 1, delete: false },
    { id: 2, delete: false },
    { id: 3, delete: true },
    { id: 4, delete: false },
    { id: 5, delete: false },
    { id: 7, delete: true }
  ];

  // Archivos marcados para borrar - files to delete
  const filesToDelete = filesToEvaluate.map(file => file.delete);

  // Malos nombres - bad names
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejor
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const currentDate = new Date();

  // días transcurridos - elapsed time in days
  const daysSince: number = 23;

  // número de archivos en un directorio - number of files in directory
  const numberOfFiles = 33;

  // primer nombre - first name
  const firstName = "Fernando";

  // primer apellido - last name
  const lastname = "Herrera";

  // días desde la última modificación - days since modification
  const updatedAt = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const maxClassesPerStudent = 6;
})();
