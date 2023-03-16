package Operaciones;
public class Operaciones {
  public static String seriePlus4Minus2(int n) {
    int num = 1;
    String text = "1-";
    for(int i = 1; i <= n; i++) {
      if( (i % 2) == 1) {
        num += 4;
      } else {
        num -= 2;
      }
      text += num;
      text = (i != n) ? text + "-" : text;
    }
    return text;
  }
}