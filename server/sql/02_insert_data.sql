USE actividad10_js;

INSERT INTO boxes (titulo) VALUES 
  ('por_hacer'),
  ('processo'),
  ('finalizada'),
  ('en_revision'),
  ('completada');

INSERT INTO cards (box_id, contenido) VALUES 
  (1, 'Tarea 1 en por_hacer'),
  (1, 'Tarea 2 en por_hacer'),
  (2, 'Tarea 1 en processo'),
  (2, 'Tarea 2 en processo'),
  (3, 'Tarea 1 en finalizada'),
  (4, 'Tarea 1 en en_revision'),
  (5, 'Tarea 1 en completada'),
  (5, 'Tarea 2 en completada');