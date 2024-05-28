import { Container, Flex } from "@mantine/core";
import formule from "../../assets/formule.png";
import formule2 from "../../assets/formule2.png";
import formule3 from "../../assets/formule3.png";
import formule4 from "../../assets/formule4.png";
import formule5 from "../../assets/formule5.png";
import formule6 from "../../assets/formule6.png";
import HomeMainText from "../shared/home-main-text";
import HomeMainTitle from "../shared/home-main-title";

const HomeMain = () => {
  return (
    <Container mt="md">
      <HomeMainText>
        <strong>Энергия</strong> — одно из сложнейших понятий современной
        физики. И закон сохранения энергии относится к числу ее основополагающих
        принципов. Вместе с экспертом разберем задачи с решением этого
        фундаментального закона природы и узнаем, кто его открыл
      </HomeMainText>
      <HomeMainText>
        Физика ставит своей целью понимание самых общих закономерностей
        материального мира. Имена Архимеда, Ньютона, Эйнштейна знакомы каждому
        школьнику. Но великое множество ученых вложили по кирпичику в здание
        современной науки и ускорили развитие человеческой цивилизации. Ее
        современный уровень был бы недостижим без понимания природы энергии и ее
        законов прежде всего в механике, самом доступном для наблюдений и
        экспериментов разделе физики.
      </HomeMainText>
      <HomeMainTitle>
        Формулировка закона сохранения энергии простыми словами в механике
      </HomeMainTitle>
      <HomeMainText>
        Закон сохранения энергии действует повсеместно и незаметно. В механике
        он срабатывает в замкнутой системе под воздействием консервативных сил –
        то есть сил тяжести и упругости, зависящих только от стартового и
        финального положения тела и не зависящих от траектории движения. При
        таких условиях энергия тел никуда не исчезает, а лишь переходит из
        кинетической в потенциальную и наоборот – из потенциальной в
        кинетическую. Это и есть самая простая формулировка закона сохранения
        энергии для механических систем.
      </HomeMainText>
      <HomeMainTitle>Формула закона сохранения энергии</HomeMainTitle>
      <Flex align="center" direction="column">
        <img src={formule} alt="" />
        <HomeMainText>
          Где: Ep — потенциальная энергия; Ek — кинетическая энергия
        </HomeMainText>
      </Flex>
      <HomeMainTitle>История открытия закона сохранения энергии</HomeMainTitle>
      <HomeMainText>
        Закономерности взаимодействия физических тел интересовали ученых с
        античных времен. Но описать их в виде формулы или хотя бы принципа они
        не сумели. Первым это попытался сделать Рене Декарт в своем труде
        «Начала философии», изданном в середине XVII века. Он указал, что если
        одно тело сталкивается с другим, то может отдать ему только такое
        количество движения, сколько второе у него отнимет. Идею Декарта развил
        Лейбниц, введя понятие «живой силы», которую мы называем кинетической
        энергией. Поддержал его рассуждения Михайло Ломоносов в своем «всеобщем
        естественном законе», но все формулировки были скорее принципом, а не
        законом, формул не было.
      </HomeMainText>
      <HomeMainText mt="xl">
        От «живой силы» физики перешли к «кинетической энергии» только в
        середине XIX столетия, накопив опыт работы с тепловыми и электрическими
        машинами. Немалый экспериментальный вклад сделал в понимание этого
        закона Джеймс Джоуль и Роберт Майер. Самую полную математическую
        формулировку дал Герман Гельмгольц, который ввел понятие потенциальной
        энергии и обобщил закон сохранения энергии на все разделы физики – даже
        на те, которые в его время не существовали. Например, на теорию
        относительности и квантовую механику.
      </HomeMainText>
      <HomeMainTitle>Задачи на закон сохранения энергии</HomeMainTitle>
      <HomeMainText>
        Самый общий физический закон используется при решении совершенно
        практических задач.
      </HomeMainText>
      <HomeMainTitle>Задача 1</HomeMainTitle>
      <HomeMainText mt="xl" mb="xl">
        Некое тело подбросили вверх вертикально с начальной скоростью 15 м/с. На
        какую высоту оно поднимется? Сопротивление воздуха при решении задачи не
        учитывать.
      </HomeMainText>
      <HomeMainText mt="xl" mb="xl">
        Решение: полученная при броске кинетическая энергия будет постепенно
        преобразовываться в потенциальную энергию:
      </HomeMainText>
      <Flex direction="column" align="center">
        <img src={formule2} alt="" />
        <HomeMainText mt="xl" mb="xl">
          То есть:
        </HomeMainText>
        <img src={formule3} alt="" />
      </Flex>
      <HomeMainText mt="xl" mb="xl">
        Где:
      </HomeMainText>
      <HomeMainText>m – масса тела;</HomeMainText>
      <HomeMainText>V – начальная скорость;</HomeMainText>
      <HomeMainText>g – ускорение свободного падения;</HomeMainText>
      <HomeMainText>h – высота подъема.</HomeMainText>
      <HomeMainText mt="xl" mb="xl">
        После преобразований получаем формулу для высоты подъема:
      </HomeMainText>
      <Flex direction="column" align="center">
        <img src={formule4} alt="" />
      </Flex>
      <HomeMainText mt="xl" mb="xl">
        <strong>Ответ:</strong> тело поднимется на высоту 11,47 м.
      </HomeMainText>

      <HomeMainTitle>Задача 2</HomeMainTitle>
      <HomeMainText mt="xl" mb="xl">
        Пружину растянули на 15 см. Известно, что она получила потенциальную
        энергию 24 Дж. Какова жесткость пружины?
      </HomeMainText>
      <HomeMainText mt="xl" mb="xl">
        Решение: формула потенциальной энергии упруго деформированного тела:
      </HomeMainText>
      <Flex direction="column" align="center">
        <img src={formule5} alt="" />
      </Flex>
      <HomeMainText mt="xl" mb="xl">
        Где:
      </HomeMainText>
      <HomeMainText>k – коэффициент жесткости;</HomeMainText>
      <HomeMainText>x – величина деформации.</HomeMainText>
      <HomeMainText mt="xl" mb="xl">
        Преобразуем формулу для расчета:
      </HomeMainText>
      <Flex direction="column" align="center">
        <img src={formule6} alt="" />
      </Flex>
      <HomeMainText mt="xl" mb="xl">
        <strong>Ответ:</strong> жесткость пружины равна 2133,33 Н/м.
      </HomeMainText>
    </Container>
  );
};

export default HomeMain;
