package operaciones;

public class Tablas {
  public static String imprimeTabla(int n) {
    String tabla = "";
    for(int i = 1; i <= 10; i++) {
      tabla += n + " x " + i + " = " + String.valueOf(n*i);
      
      if(i!=10) {
        tabla += " / ";
      }
    }
    return tabla;
  }
}
