use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct ButtonProps {
    pub label: String,
    #[prop_or_default]
    pub on_click: Callback<MouseEvent>,
}

#[function_component(Button)]
pub fn button(props: &ButtonProps) -> Html {
    html! {
        <button onclick={props.on_click.clone()}>
            { &props.label }
        </button>
    }
}
