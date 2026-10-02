"""Contoh latihan Python 3: ringkasan nilai siswa."""
import math

def main():
    try:
        nilai = [float(item) for item in input("Masukkan nilai 0-100, pisahkan dengan spasi: ").split()]
        if not nilai or any(not math.isfinite(n) or n < 0 or n > 100 for n in nilai):
            print("Masukkan setidaknya satu angka yang valid antara 0 dan 100.")
            return
        print(f"Jumlah nilai: {len(nilai)}")
        print(f"Rata-rata: {sum(nilai) / len(nilai):.2f}")
        print(f"Tertinggi: {max(nilai):g}")
        print(f"Terendah: {min(nilai):g}")
    except ValueError:
        print("Input harus berupa angka. Gunakan titik untuk desimal.")

if __name__ == "__main__":
    main()
