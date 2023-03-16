package Factorial;

public class Factorial {
  public static int calculate(int n) {
    if( n==0 ) {
      return 1;
    }
    return n * calculate(n-1);
  }
}
