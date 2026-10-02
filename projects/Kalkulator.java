import java.util.Scanner;
import java.util.Locale;

// Contoh latihan, jalankan dengan JDK 8 atau lebih baru.
public class Kalkulator {
    public static void main(String[] args) {
        try (Scanner input = new Scanner(System.in).useLocale(Locale.US)) {
            System.out.print("Angka pertama: ");
            double a = input.nextDouble();
            System.out.print("Operator (+, -, *, /): ");
            String op = input.next();
            System.out.print("Angka kedua: ");
            double b = input.nextDouble();
            if (!Double.isFinite(a) || !Double.isFinite(b)) {
                System.out.println("Masukkan angka berhingga."); return;
            }
            double hasil;
            switch (op) {
                case "+": hasil = a + b; break;
                case "-": hasil = a - b; break;
                case "*": hasil = a * b; break;
                case "/":
                    if (b == 0) { System.out.println("Tidak dapat membagi dengan nol."); return; }
                    hasil = a / b; break;
                default: System.out.println("Operator tidak dikenal."); return;
            }
            if (!Double.isFinite(hasil)) System.out.println("Hasil di luar jangkauan angka.");
            else System.out.println("Hasil: " + hasil);
        } catch (java.util.InputMismatchException e) {
            System.out.println("Input tidak valid. Gunakan angka dan titik untuk desimal.");
        } catch (java.util.NoSuchElementException e) {
            System.out.println("Input belum lengkap.");
        }
    }
}
