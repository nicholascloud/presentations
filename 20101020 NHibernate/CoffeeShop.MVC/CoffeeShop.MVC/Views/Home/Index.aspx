<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<CoffeeShop.MVC.Models.HomeModel>" %>

<asp:Content ID="title" ContentPlaceHolderID="TitleContent" runat="server">
    Drinks n' Stuff
</asp:Content>

<asp:Content ID="mainContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Drinks n' Stuff</h2>

    <% if (TempData.ContainsKey("error")) { %>
    <div class="error"><%= TempData["error"] %></div>
    <% } %>

    <% if (TempData.ContainsKey("success")) { %>
    <div class="success"><%= TempData["success"] %></div>
    <% } %>

    <fieldset>
    <table>
        <thead>
            <tr>
                <td>Drink</td>
                <td>Blend (Strength)</td>
                <td>Size</td>
                <td>Price</td>
                <td>Ingredients</td>
            </tr>
        </thead>
        <tbody>
        <% foreach (var drink in Model.Drinks) { %>
            <tr>
                <td><%: drink.Name %></td>
                <td><%: drink.Blend %> (<%: drink.Blend.Strength %>)</td>
                <td><%: drink.Size %></td>
                <td><%: drink.TotalPrice().ToString("c") %></td>
                <td><%: drink.IngredientSummary() %></td>
            </tr>
        <% } %>
        </tbody>
        <tfoot></tfoot>
    </table>
    </fieldset>

    <% using (Html.BeginForm("Add", "Home", FormMethod.Post)) { %>
    <fieldset>
        <div class="formRow">
            <%= Html.LabelFor(m=>m.ProductName) %>
            <%= Html.TextBoxFor(m=>m.ProductName) %>
        </div>
        <div class="formRow">
            <%= Html.LabelFor(m=>m.ProductBasePrice) %>
            <%= Html.TextBoxFor(m=>m.ProductBasePrice) %>
        </div>
        <div class="formRow">
            <%= Html.LabelFor(m=>m.CupSizeID) %>
            <%= Html.DropDownListFor(m=>m.CupSizeID, Model.Sizes) %>
        </div>
        <div class="formRow">
            <%= Html.LabelFor(m=>m.BlendID) %>
            <%= Html.DropDownListFor(m=>m.BlendID, Model.Blends) %>
        </div>
        <div class="formRow">
            <%= Html.LabelFor(m=>m.IngredientIDs) %>
            <%= Html.DropDownListFor(m=>m.IngredientIDs, Model.Ingredients, new { multiple = true }) %>
        </div>
        <div class="formRow">
            <button>Add</button>
        </div>
    </fieldset>
    <% } %>

</asp:Content>
