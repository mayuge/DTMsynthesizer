mod components;
use components::button::Button;
use yew::prelude::*;

#[function_component(App)]
fn app() -> Html {
    let count = use_state(|| 0);

    let onclick = {
        let count = count.clone();
        Callback::from(move |_| count.set(*count + 1))
    };

    html! {
        <div>
            <h1>{ "Yew ボタンの例" }</h1>
            <Button label={"クリック！".to_string()} on_click={onclick} />
            <p>{ format!("クリック数: {}", *count) }</p>
        </div>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
