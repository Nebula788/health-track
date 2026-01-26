import React from "react";

const footer = () => {
  return (
    <div>
      <footer className="border-t border-gray-200 py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-linear-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">H</span>
                </div>
                <span className="text-lg font-bold text-muted">
                  HealthTracker
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Эрүүл амьдралын хэв маягт хүрэх таны найдвартай хамтрагч
              </p>
            </div>
            <div>
              <h4 className="text-muted font-semibold mb-4">Боломжууд</h4>
              <ul className="space-y-2 text-muted-foreground/80 text-sm">
                <li>
                  <a href="#" className="hover:text-muted transition">
                    BMI тооцоолуур
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-muted transition">
                    Хоолны төлөвлөгөө
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-muted transition">
                    Дасгал хөдөлгөөн
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-muted font-semibold mb-4">Компани</h4>
              <ul className="space-y-2 text-muted-foreground/80 text-sm">
                <li>
                  <a href="#" className="hover:text-muted transition">
                    Бидний тухай
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-muted transition">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-muted transition">
                    Холбоо барих
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-muted font-semibold mb-4">Хууль эрх зүй</h4>
              <ul className="space-y-2 text-muted-foreground/80 text-sm">
                <li>
                  <a href="#" className="hover:text-muted transition">
                    Үйлчилгээний нөхцөл
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-muted transition">
                    Нууцлалын бодлого
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-muted-foreground/80 text-sm">
            © 2026 HealthTracker. Бүх эрх хуулиар хамгаалагдсан.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
